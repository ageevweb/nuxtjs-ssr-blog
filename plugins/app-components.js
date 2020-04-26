import Vue from 'vue'

import Message from '@/components/UI/Message'

import AppInput from '@/components/UI/controls/Input'
import AppTextarea from '@/components/UI/controls/TextArea'
import AppButton from '@/components/UI/controls/Button'

import Intro from '~/components/UI/Intro.vue'
import PostsList from '~/components/blog/PostsList.vue'

Vue.component('AppMessage', Message)
Vue.component('AppInput', AppInput)
Vue.component('AppTextarea', AppTextarea)
Vue.component('AppButton', AppButton)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)