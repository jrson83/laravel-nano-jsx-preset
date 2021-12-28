import * as Nano from 'nano-jsx/lib/core'
import { Route, Switch, Link } from 'nano-jsx/lib/components/router'
import { Img } from 'nano-jsx/lib/components/img'
import { Helmet } from 'nano-jsx/lib/components/helmet'
import { Fragment } from 'nano-jsx/lib/fragment'

export const App = () => {
	const dynamic = 'Nano JSX'

	return (
		<div id="root">
			<header>
				<nav id="navbar">
					<ul>
						<li>
							<Img
								id="navbar-logo"
								src="https://nanojsx.github.io/img/logo-compressed.svg"
								lazy={false}
								alt="Logo"
								width="144"
								height="55"
							/>
						</li>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/features">Features</Link>
						</li>
						<li>
							<Link to="/notfoundtest">404 Error</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main id="site-content">
				<Switch
					fallback={() => (
						<Fragment>
							<Helmet>
								<title>404 Error - {dynamic}</title>
								<meta name="title" content="404 Error - {dynamic}" />
							</Helmet>

							<div id="content">
								<h1>
									404 Error <small>Not found</small>
								</h1>
							</div>
						</Fragment>
					)}
				>
					<Route exact path="/">
						<Helmet>
							<title>Home - {dynamic}</title>
							<meta name="title" content="Home - {dynamic}" />
						</Helmet>

						<div id="content">
							<h1>I'm a simple Nano JSX app.</h1>
						</div>
					</Route>

					<Route exact path="/about">
						<Helmet>
							<title>About - {dynamic}</title>
							<meta name="title" content="About - {dynamic}" />
						</Helmet>

						<div id="content">
							<h1>Hi from About Nano Page.</h1>
						</div>
					</Route>

					<Route exact path="/features">
						<Helmet>
							<title>Features - {dynamic}</title>
							<meta name="title" content="Features - {dynamic}" />
						</Helmet>

						<div id="content">
							<h1>Hi from Features Nano Page.</h1>
						</div>
					</Route>
				</Switch>
			</main>
			<footer>
				<p>
					Visit{' '}
					<a href="https://nanojsx.github.io/" target="_blank" rel="noopener">
						nanojsx.github.io
					</a>{' '}
					for docs and examples.
				</p>
			</footer>
		</div>
	)
}
