import api from "@/http-common";
import { fileApiInstance } from "@/http-common";

class ArtworkAPI {
  // 작품 등록 API(artwork: file, title, writerId, description)
  addArtwork(artwork: FormData) {
    return fileApiInstance.post(`/artwork`, artwork);
  }
  // 작품 수정 API
  updateArtwork(id: number, artwork: FormData) {
    return fileApiInstance.put(`/artwork/${id}`, artwork);
  }
  // id에 해당하는 작품 조회 (개별 작품 조회)
  getArtworkById(id: number, loginId: number) {
    return api.get(`/artwork/${id}`, { params: { loginId: loginId } });
  }
  // 작품 전체 조회 API
  getArtworkList(loginId: number, page: number) {
    return api.get(`/artwork?loginId=${loginId}&page=${page}`);
  }
  // 회원이 업로드한 전체 작품 조회 API
  getArtworkListByMember(memberId: number) {
    // return api.get(`/artwork/member`, { params: { nickname: nickname } });
    // return api.get(`/artwork/member`, { data: { nickname: nickname } });
    return api.get(`/artwork/member?nickname=`, {
      params: { memberId: memberId },
    });
    // return api.get(`/artwork/member?nickname=` + nickname);
    // return api.get(`/artwork/member?nickname=` + nickname);
    // return api.get(`/artwork/member/${nickname}`);
  }
  // 작품 삭제 API
  deleteArtwork(id: number) {
    return api.delete(`/artwork/` + id);
  }
  // 회원이 좋아요 한 작품 목록 불러오기(없을 경우 null)
  getLikeArtworkList(id: number) {
    return api.get(`/artwork/${id}/like`);
  }
  // 회원이 팔로우 한 작품 목록 불러오기
  getFollowArtworkList(nickName: string) {
    return api.get(`/artwork/${nickName}/follow`);
  }
}

export default new ArtworkAPI();
