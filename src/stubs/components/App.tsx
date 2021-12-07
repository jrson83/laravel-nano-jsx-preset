import * as Nano from 'nano-jsx/lib/core'
import * as Router from 'nano-jsx/lib/components/router'
import { Img } from 'nano-jsx/lib/components/img'

export const App = () => {
	return (
		<div id="root">
			<header>
				<nav id="navbar">
					<ul>
						<li><Img id="navbar-logo" src="https://nanojsx.github.io/img/logo-compressed.svg" lazy={false} alt="Logo" width="144" height="55" /></li>
						<li><Router.Link to="/">Home</Router.Link></li>
						<li><Router.Link to="/about">About</Router.Link></li>
						<li><Router.Link to="/features">Features</Router.Link></li>
					</ul>
				</nav>
			</header>
			<main id="site-content">
				<Router.Switch fallback={() => <div id="content"><h1>404 (not found)</h1></div>}>
					<Router.Route exact path="/">
						<div id="content"><h1>I'm a simple Nano JSX app.</h1></div>
					</Router.Route>
					<Router.Route path="/about">
						<div id="content"><h1>This is another page.</h1></div>
					</Router.Route>
					<Router.Route path="/features">
					<div id="content"><h1>And another page.</h1></div>
					</Router.Route>
				</Router.Switch>
			</main>
			<footer><p>Visit <a href="https://nanojsx.github.io/" target="_blank" rel="noopener">nanojsx.github.io</a> for docs and examples.</p></footer>
		</div>
	)
}