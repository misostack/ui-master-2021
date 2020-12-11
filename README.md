# UI Master 2021

- :white_check_mark: Design to HTML/CSS
- :white_check_mark: Landing Page
- :white_check_mark: Wordpress Theme
- :white_check_mark: Dashboard
- :white_check_mark: Resources
- :white_check_mark: Tutorial - Online course
- :white_check_mark: Animations
- :white_check_mark: UX
- :white_check_mark: Page Speed Inside
- :white_check_mark: SEO & Landing Page
- :white_check_mark: SEO Audit

## Design to HTML/CSS

> Rules

- Top-Down ( layout, blocks )
- Outside to Inside
  - container vs container-fluid
  - row with container/container-fluid
- Left to Right ( columns with row )

> Process

- Break down layout
- Break down blocks
- Analyze each block
- HTML first
- CSS Later
- Mobile first rules

> Examples

```js
// layout breakdown
body
  header ( shared UI )
    section.top-bar
    nav.top-nav
  main (unique content for each page)
    section.a
    section.b
    section.c
  footer ( shared UI )
    section.app-footer
```

```js
// block details breakdown
section.top-bar
  div.container
    div.row
      div.col
        ul.top-bar__social-list > li * 6 > a > i

      div.col
        div.top-bar__links
          a (register)
          span (/)
          a (login)

section.a ( background-image )
  div.container-fluid
    h1.a__title

```

## Practice

- [Clocks](./001)

## References

- Browser support https://caniuse.com/
