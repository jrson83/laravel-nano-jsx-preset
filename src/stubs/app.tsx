
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Nano JSX and other libraries. It is a great starting point when
 * building robust, powerful web applications using Nanno JSX and Laravel.
 */

// optional import bootstrap
//require('./bootstrap')

import * as Nano from 'nano-jsx/lib/core'
import { App } from './components/App'

Nano.render(<App name="Nano" />, document.body)