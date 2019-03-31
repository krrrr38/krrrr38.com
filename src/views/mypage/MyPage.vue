<template>
  <div class="mypage">
    this is my page
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace, State } from 'vuex-class'
import { AuthState, LoginUser, MyPageState } from '@/types'

const auth = namespace('auth')
const mypage = namespace('mypage')

@Component({
  components: {}
})
export default class MyPage extends Vue {
  @State('auth') authState: AuthState
  @State('mypage') mypageState: MyPageState
  @auth.Getter('user') user: LoginUser | undefined
  @mypage.Action('incrementAccessCount') incrementAccessCount: (userId: string) => Promise<number>

  async created() {
    if (this.user) {
      const accessCount = await this.incrementAccessCount(this.user.userId)
      console.log(`mypage: ${this.user.userId}, accessCount=${accessCount}`)
    }
  }
}
</script>
