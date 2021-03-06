<template>
  <div>
    <toast-message ref="toast"></toast-message>
    <div>
      <div class="container">
        <div class="title">나의 그림 발자취<foot-print style="font-size: 1.8rem;"></foot-print></div>
        <div v-if="!isArtwork" class="if-not-text">
          내가 등록한 그림이 없습니다. 그린 그림을 다른 사람들과 공유해볼까요? 
        </div>
        <masonry-wall
          :items="items"
          :ssr-columns="1"
          :column-width="300"
          :gap="16"
        >
          <template #default="{ item }">
            <figure class="card card--1">
              <router-link
                :to="{
                  name: 'ArtworkDetail',
                  params: { id: item.artworkId },
                }"
              >
                <img :src="item.imageUrl" :alt="`${item.artworkTitle}`" />
              </router-link>
              <figcaption>
                <span class="info">
                  <router-link
                    :to="{
                      name: 'ArtworkDetail',
                      params: { id: item.artworkId },
                    }"
                  >
                    <h3 class="artwork-title">{{ item.artworkTitle }}</h3>
                  </router-link>
                  <router-link
                    :to="{ name: 'Profile', params: { id: item.memberId } }"
                  >
                  <span class="artwork-artist">{{ item.memberNickname }}</span>
                </router-link>
                </span>
                <span class="links">
                  <!-- like button -->
                  <a href="#">
                    <like-button
                      class="icon"
                      :liked="likeInfo.likeOrNot"
                      :artworkId="item.artworkId"
                      :userId="userInfo.id"
                      @toggle="toggleLike(index)"
                      @message="showToastMessage"
                    ></like-button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </template>
        </masonry-wall>
      </div>
      <!-- Scroll To Top Button -->
      <arrow-up-bold-circle-outline
        class="arrow scroll-to-top"
        @click="scrollToTop"
      ></arrow-up-bold-circle-outline>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArtworkAPI from "@/apis/artworkAPI";
import LikeButton from "@/components/common/LikeButton.vue";
import ToastMessage from "@/components/common/ToastMessage.vue";
import { mapState } from "vuex";
import { ArrowUpBoldCircleOutline } from "mdue";
import { FootPrint } from "mdue";
import AccountsAPI from "@/apis/accountsAPI";
import ResponseData from "@/types/ResponseData";
import ProfileInfo from "@/types/ProfileInfo";

const accountsStore = "accountsStore";

export default defineComponent({
  data() {
    return {
      items: [] as any,
      likeInfo: [] as any,
      profileInfo: {} as ProfileInfo,
      isArtwork: false,
    };
  },
  components: {
    LikeButton,
    ToastMessage,
    ArrowUpBoldCircleOutline,
    FootPrint,
  },
  mounted() {
    this.getProfileInfo();
    this.getFavouriteArtworks();
  },
  computed: {
    ...mapState(accountsStore, ["userInfo"]),
  },
  methods: {
    async getFavouriteArtworks() {
      const res = await ArtworkAPI.getArtworkListByMember(Number(this.$route.params.id));
      console.log(res);
      this.items = res.data;
      if (this.items.length == 0) {
        this.isArtwork = false;
      } else {
        this.isArtwork = true;
      }
      let size = this.items.length;
      for (let i = 0; i < size; i++) {
        this.likeInfo.push({
          likeOrNot: this.items[i].likeOrNot,
        })
      }
    },
    toggleLike(index: number) {
      this.items[index].likeOrNot = !this.items[index].likeOrNot;
    },
    showToastMessage(msg: string) {
      (this.$refs["toast"] as typeof ToastMessage).showToast(msg);
    },
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6);

      function frame() {
        if (0 > currentScroll) clearInterval(int);
        else {
          currentScroll = currentScroll - 12;
          document.documentElement.scrollTop = currentScroll;
        }
      }
    },
    // Profile 정보 가져오기
    getProfileInfo() {
      AccountsAPI.getProfileInfo(
        this.userInfo.id,
        Number(this.$route.params.id)
      )
        .then((res: ResponseData) => {
          this.profileInfo = res.data;
          return this.profileInfo
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
</script>

<style scoped lang="scss">
.if-not-text {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}

.title {
  display: flex;
  align-items: center;
  margin-top: $size-large;
  margin-left: $size-large;
  font-size: $size-large;
  font-weight: $weight-semi-bold;
}

.container {
  margin-top: 3rem;
  max-width: 1200px;
  min-width: 320px;
  margin: 1rem auto 1.75rem auto;
  padding: 0 1rem;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #e4e4e4;
}

img {
  width: 300px;
  height: auto;
}

figure.card {
	position: relative;
  width: 300px;
  margin: 0 auto;
	transition: background 400ms ease;
	overflow: hidden;
	&:hover {
    	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
		figcaption {
			transform: translateY(0px);
		}
	}

	&--1 {
		figcaption {
			width: 280px;
			height: 80px;
			padding: 15px 20px;
      left: 3.5%;
      bottom: 3.5%;
      border-radius: 2px;
			transform: translateY(100px);
		}
	}

	figcaption {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		background: $white;
		transition: transform 400ms ease;
		.info {
			font-family: "Montserrat";
			h3 {
				font-size: 1.2rem;
				letter-spacing: 1px;
				margin-bottom: 5px;
			}
			span {
				color: $dark-grey;
				font-size: 0.85rem
			}
		}
		.links {
			display: flex;
			justify-content: end;
			align-items: center;
			a {
				text-decoration: none;
				position: relative;
				width: 35px;
				height: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: $red;
				margin-left: 10px;
				font-size: $font-large;
				opacity: 0.65;
				overflow: hidden;
				&:hover {
					opacity: 1;
				}
				&:focus {
					outline: none;
					&::after {
						transform: scale(1);
						opacity: 1;
					}
				}
				&::after {
					content: "";
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					opacity: 0;
					background: rgba(255, 255, 255, 0.05);
					transform: scale(0.5);
					z-index: -1;
					transition: all 150ms ease;
				}
			}
		}
	}
}

// scroll to top button
.scroll-to-top {
  font-size: $font-big;
  cursor: pointer;
  position: fixed;
  z-index: 1049;
  bottom: 20px;
  border-radius: 50%;
  background-color: $white;
  &:hover {
    background-color: $black;
    color: $white;
  }
}
</style>