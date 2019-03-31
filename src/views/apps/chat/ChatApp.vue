<template>
  <div class="chatapp">
    this is chat app
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace, State } from 'vuex-class'
import { AuthState, LoginUser, MyPageState } from '@/types'

const auth = namespace('auth')
const chatApp = namespace('chatApp')

@Component({
  components: {}
})
export default class ChatApp extends Vue {
  @State('auth') authState: AuthState
  @State('mypage') mypageState: MyPageState
  @auth.Getter('user') user: LoginUser | undefined

  async created() {
    if (this.user) {
      console.log(`chatapp: ${this.user.userId}`)
    }
  }
}
</script>
