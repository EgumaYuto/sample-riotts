import '@riotjs/hot-reload'
import {Route, Router} from '@riotjs/route'
import {component, register} from 'riot'
import App from './app.riot'
import Documents from './client/execute/documents/documents.riot'

register('my-router', Router)
register('my-route', Route)
register('documents', Documents)

component(App)(document.getElementById('app') || document.body, {})
