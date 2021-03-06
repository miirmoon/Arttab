<template>
  <div>
    <toast-message ref="toast"></toast-message>
    <div class="container">
      <masonry-wall
        :items="items"
        :ssr-columns="1"
        :column-width="300"
        :gap="16"
      >
        <template #default="{ item, index }">
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
                    :liked="item.likeOrNot"
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
    <!-- Loader -->
    <loader :showLoader="showLoader"></loader>
    <!-- Scroll To Top Button -->
    <arrow-up-bold-circle-outline
      class="scroll-to-top"
      @click="scrollToTop"
    ></arrow-up-bold-circle-outline>
    <!-- Observer -->
    <observer :contentsDone="!contentsDone" @intersect="intersected"></observer>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import ArtworkAPI from "@/apis/artworkAPI";
import Observer from "@/components/main/child/Observer.vue";
import LikeButton from "@/components/common/LikeButton.vue";
import ToastMessage from "@/components/common/ToastMessage.vue";
import { mapState } from "vuex";
import Loader from "@/components/main/child/Loader.vue";
import ArtworkInfoMain from "@/types/ArtworkInfoMain";
import { ArrowUpBoldCircleOutline } from "mdue";

const accountsStore = "accountsStore";

export default defineComponent({
  el: "#app",
  data() {
    return {
      page: 0,
      items: [] as ArtworkInfoMain[],
      contentsDone: false,
      showLoader: false,
    };
  },
  components: {
    Observer,
    LikeButton,
    Loader,
    ArrowUpBoldCircleOutline,
    ToastMessage,
  },
  methods: {
    async intersected() {
      const res = await ArtworkAPI.getArtworkList(this.userInfo.id, this.page);
      this.page++;
      const items = res.data;
      let size = items.length;
      if (size <= 19) {
        this.contentsDone = true;
        this.showLoader = true;
      }
      this.items = [...this.items, ...items];
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
  },
  computed: {
    ...mapState(accountsStore, ["userInfo"]),
  },
});
</script>


<style scoped lang="scss">
.container {
  margin-top: 3rem;
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
        font-size: 0.85rem;
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