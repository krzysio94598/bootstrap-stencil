---
title: Carousel (bs-carousel)
description: A slideshow component for cycling through elements—images or slides of text—like a carousel.
group: components
toc: true
---

{% callout info %}
#### Component Status

<bs-badge theme="warning">Work in Progress</bs-badge>

The `bs-carousel` component is under active development, and isn't fully completed yet.

It is stable and can be used.
{% endcallout %}

## How it works

The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

In browsers where the <a href="https://www.w3.org/TR/page-visibility/">Page Visibility API</a> is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

Please be aware that nested carousels are not supported, and carousels are generally not compliant with accessibility standards.


## Examples

Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.

If you don't set a unique id on the `bs-carousel` component, one will be automatically assigned. This is done for optional controls, especially if you’re using multiple carousels on a single page.

### Slides only

Here’s a carousel with slides only.

{% example html %}
<bs-carousel id="carousel1" slides-only="true">
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="First slide" active="true"></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Second slide"></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Third slide"></bs-carousel-item>
</bs-carousel>
{% endexample %}

### With controls

Adding in the previous and next controls:

{% example html %}
<bs-carousel id="carousel2">
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="First slide" active="true"></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Second slide"></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Third slide"></bs-carousel-item>
</bs-carousel>
{% endexample %}

If the slides-only property is not present or is set to 'false', the previous and next controls are shown on the Carousel.

### With indicators

You can also add the indicators to the carousel, alongside the controls, too.

{% example html %}
<bs-carousel id="carousel3" with-indicators="true">
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="First slide" active="true"></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Second slide"></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Third slide"></bs-carousel-item>
</bs-carousel>
{% endexample %}

<bs-alert theme="warning" heading="Initial active element required">
  The active property with a value of "true" needs to be added to one of the slides. Otherwise, the carousel will not be visible.
</bs-alert>


### With captions

Add captions to your slides easily with the content within any carousel-item. They can be easily hidden on smaller viewports, as shown below, with optional display utilities.

{% example html %}
<bs-carousel id="carousel4" with-indicators="true">
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="First slide" active="true"><h2>1st slide caption</h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Second slide"><h2>2nd slide caption</h2></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Third slide"><h2>3rd slide caption</h2></bs-carousel-item>
</bs-carousel>
{% endexample %}


## JavaScript behavior

Since these are web components, there is no *framework* needed. You can just use native javascript to interact with the `bs-carousel` component.

### Methods

| Method | Description |
| --- | --- |
| `document.createElement('methods-carousel')` | Creates an alert. You will need to set other properties to add content, and you will need to add it the DOM. See code example below. |
| `document.getElementById("methods-carousel").dismiss()` | Closes an alert by removing it from the DOM. This can be called to dismiss the alert even if it wasn't set as `dimissible`. |

### Properties

| Property | Description | Default | Example |
| --- | --- | --- |
| id | assigns a unique id | {unique-id} | `element.id = 'carousel1'` |
| interval | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle. | 5000 | `element.interval = 1000` |
| keyboard | Whether the carousel should react to keyboard events. | true | `element.keybaord = true` |
| pause | If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. On touch-enabled devices, when set to "hover", cycling will pause on touchend (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior. | "hover" | `element.pause = false` |
| ride | Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load. | false | `element.ride = false` |
| wrap | Whether the carousel should cycle continuously or have hard stops. | true | `element.wrap = false` |
| slidesOnly | Display the slides without navigation controls. | false | `element.slidesOnly = true` |
| withIndicators | Display slide position indicators. | false | `element.slidesOnly = false` |

#### Property examples

<div class="docs-example">
<bs-carousel id="properties-carousel">
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="First slide" active="true"><h2>1st slide caption</h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Second slide"><h2>2nd slide caption</h2></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Third slide"><h2>3rd slide caption</h2></bs-carousel-item>
</bs-carousel>
  <a href="#" onclick="togglePropertiesCarouselSlidesOnly(event);">Change `slidesOnly` on "Properties Carousel"</a>
  <br>
</div>

```html
<bs-carousel id="properties-carousel">
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="First slide" active="true"><h2>1st slide caption</h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Second slide"><h2>2nd slide caption</h2></bs-carousel-item>
  <bs-carousel-item src="https://via.placeholder.com/800x400"
    alt="Third slide"><h2>3rd slide caption</h2></bs-carousel-item>
</bs-carousel>
<a href="#" onclick="togglePropertiesCarouselSlidesOnly(event);">Change `slidesOnly` on "Properties Carousel"</a>
<br>
<script>
  function togglePropertiesCarouselSlidesOnly(event) {
    var el = document.getElementById("properties-carousel");

    event.preventDefault();

    if (!el) {
      return;
    }

    el.slidesOnly = !el.slidesOnly;
  }
</script>
```


### Events

There are currently no events generated by the `bs-carousel` component. But events may be added in the future.
