import '@riotjs/hot-reload'
import {Route, Router} from '@riotjs/route'
import {component, register} from 'riot'
import App from './app.riot'

register('my-router', Router)
register('my-route', Route)


component(App)(document.getElementById('app') || document.body, {})
