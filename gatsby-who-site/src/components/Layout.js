import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="/about.html">About</a>
      </li>
      <li>
        <a href="/services/index.html">Services</a>
      </li>
      <li>
        <Link to="/">Who We Are</Link>
      </li>
      <li>
        <a href="/contact.html">Contact</a>
      </li>
    </ul>
  </nav>
)

const Header = () => (
  <header>
    <a href="/" class="brand-color logo-text">Taylor's Tidy Trees</a>
    <Nav />
  </header>
)

export default ({ children, breadcrumbs }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Taylor's Tidy Trees
          {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ""}
        </title>
        <link
          href="/assets/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/normalize.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/style.css"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}
