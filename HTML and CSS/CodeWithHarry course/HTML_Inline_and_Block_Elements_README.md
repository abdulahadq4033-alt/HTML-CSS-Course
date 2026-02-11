# HTML Inline and Block Elements

This README explains **inline elements** and **block-level elements** in
HTML. Understanding this distinction is essential for layout, styling,
and exams/interviews.

------------------------------------------------------------------------

## Block-Level Elements

### Characteristics

-   Start on a **new line**
-   Take **full available width** by default
-   Can contain **inline and other block elements**

### Common Block Elements

-   `<address>`
-   `<article>`
-   `<aside>`
-   `<blockquote>`
-   `<canvas>`
-   `<dd>`
-   `<div>`
-   `<dl>`
-   `<dt>`
-   `<fieldset>`
-   `<figcaption>`
-   `<figure>`
-   `<footer>`
-   `<form>`
-   `<h1>` to `<h6>`
-   `<header>`
-   `<hr>`
-   `<li>`
-   `<main>`
-   `<nav>`
-   `<noscript>`
-   `<ol>`
-   `<p>`
-   `<pre>`
-   `<section>`
-   `<table>`
-   `<tfoot>`
-   `<ul>`
-   `<video>`

### Notes

-   `<div>` is a generic block container
-   Semantic block elements improve **SEO** and **accessibility**

------------------------------------------------------------------------

## Inline Elements

### Characteristics

-   Do **not** start on a new line
-   Take only the **required width**
-   Usually contain text or small content

### Common Inline Elements

-   `<a>`
-   `<abbr>`
-   `<acronym>` (deprecated)
-   `<b>`
-   `<bdo>`
-   `<big>` (deprecated)
-   `<br>`
-   `<button>`
-   `<cite>`
-   `<code>`
-   `<data>`
-   `<datalist>`
-   `<del>`
-   `<dfn>`
-   `<em>`
-   `<i>`
-   `<img>`
-   `<input>`
-   `<ins>`
-   `<kbd>`
-   `<label>`
-   `<map>`
-   `<mark>`
-   `<meter>`
-   `<object>`
-   `<output>`
-   `<progress>`
-   `<q>`
-   `<ruby>`
-   `<s>`
-   `<samp>`
-   `<script>`
-   `<select>`
-   `<small>`
-   `<span>`
-   `<strong>`
-   `<sub>`
-   `<sup>`
-   `<textarea>`
-   `<time>`
-   `<u>`
-   `<var>`
-   `<wbr>`

------------------------------------------------------------------------

## Important Rules

1.  Inline elements **should not contain block elements**
2.  Block elements **can contain inline elements**
3.  CSS can change element behavior using `display`

### Example

``` css
span {
  display: block;
}

div {
  display: inline;
}
```

------------------------------------------------------------------------

## Summary

-   **Block elements** → page structure and layout\
-   **Inline elements** → text-level and small content

This topic is very important for: - HTML & CSS layouts - Web development
fundamentals - Exams and technical interviews

------------------------------------------------------------------------

Block Elements (Most Commonly Used First)

<div>: A generic container for flow content.
<p>: Paragraph.
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Headings.
<ul>: Unordered list.
<ol>: Ordered list.
<li>: List item.
<form>: A section containing form controls.
<table>: Table.
<section>: A standalone section of a document.
<header>: A container for introductory content or a set of navigational links.
<footer>: Footer of a section or page.
<nav>: A section of a page that contains navigation links.
<article>: A self-contained composition in a document.
<aside>: A section of a page that contains information indirectly related to the main content.
<main>: The main content of a document.
<fieldset>: A set of form controls grouped under a common name.
<blockquote>: A block of text that is a quotation from another source.
<pre>: Preformatted text.
<canvas>: A container used to draw graphics via JavaScript.
<dl>: Description list.
<dt>: Term in a description list.
<dd>: Description in a description list.
<figure>: Any content that is referenced from the main content.
<figcaption>: A caption for a <figure> element.
<address>: Contact information for the author or owner of the document.
<hr>: A thematic break or a horizontal rule.
<tfoot>: Footer of a table.



Inline Elements (Most Commonly Used First)
<a>: Anchor or hyperlink.
<img>: Image.
<span>: Generic inline container.
<input>: Input field.
<label>: Label for a form element.
<strong>: Strong emphasis.
<em>: Emphasized text.
<br>: Line break.
<code>: Code snippet.
<b>: Bold text.
<i>: Italic text.
<u>: Underlined text.
<small>: Smaller text.
<sub>: Subscript.
<sup>: Superscript.
<mark>: Marked or highlighted text.
<q>: Short inline quotation.
<cite>: Citation.
<kbd>: Keyboard input.
<samp>: Sample output.
<var>: Variable in a mathematical expression or programming context.
<time>: Time.
<abbr>: Abbreviation.
<data>: Machine-readable translation of content.
<acronym>: Acronym (Not supported in HTML5).
