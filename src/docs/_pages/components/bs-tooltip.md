---
title: Tooltips (bs-tooltip)
description: Documentation and examples for adding custom Stencil/Bootstrap tooltips using CSS3 for animations and data-attributes for local title storage.
group: components
toc: true
---

## Examples

<p>Hover over the links below to see tooltips:</p>

<p>Tight pants next level keffiyeh <bs-tooltip title="Default tooltip"><a href="#">you probably</a></bs-tooltip> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger
  bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel have a terry richardson
  vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
  mcsweeney's cleanse vegan chambray. A really ironic artisan whatever keytar, scenester farm-to-table banksy Austin
  twitter handle freegan cred raw denim single-origin coffee viral.</p>

### Static demo

<p>Four options are available: top, right, bottom, and left aligned.</p>

{% example html %}
<bs-card style="height: 160px; padding-top: 40px;">
  <div style="display: flex;">
    <div style="flex: 1 1 auto; text-align: center;">
      <bs-tooltip placement="top" title="Tooltip on top" show disabled trigger="manual">
        <bs-button></bs-button>
      </bs-tooltip>
    </div>
    <div style="flex: 1 1 auto; text-align: center;">
      <bs-tooltip animation="false" placement="right" title="Tooltip on right" show disabled trigger="manual">
        <bs-button></bs-button>
      </bs-tooltip>
    </div>
    <div style="flex: 1 1 auto; text-align: center; ">
      <bs-tooltip placement="bottom" title="Tooltip on bottom" show disabled trigger="manual">
        <bs-button></bs-button>
      </bs-tooltip>
    </div>
    <div style="flex: 1 1 auto; text-align: center;">
      <bs-tooltip placement="left" title="Tooltip on left" show disabled trigger="manual">
        <bs-button></bs-button>
      </bs-tooltip>
    </div>
  </div>
</bs-card>
{% endexample %}


### Interactive demo

{% example html %}
<bs-card>
  <bs-tooltip placement="top" title="Tooltip on top">
    <button type="button" class="btn btn-secondary">
      Tooltip on top
    </button>
  </bs-tooltip>
  <bs-tooltip animation="false" placement="right" title="Tooltip on right">
    <button type="button" class="btn btn-secondary">
      Tooltip on right
    </button>
  </bs-tooltip>
  <bs-tooltip placement="bottom" title="Tooltip on bottom">
    <button type="button" class="btn btn-secondary">
      Tooltip on bottom
    </button>
  </bs-tooltip>
  <bs-tooltip placement="left" title="Tooltip on left">
    <button type="button" class="btn btn-secondary">
      Tooltip on left
    </button>
  </bs-tooltip>
  <bs-tooltip html title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
    <button type="button" class="btn btn-secondary">
      Tooltip with HTML
    </button>
  </bs-tooltip>
</bs-card>
{% endexample %}

## Methods

<h3>Asynchronous methods and transitions</h3>

<p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>

el.tooltip(options);
Attaches a tooltip handler to an element collection.

el.showTooltip();
Reveals an element’s tooltip. Returns to the caller before the tooltip has actually been shown (i.e. before the shown.bs.tooltip event occurs). This is considered a “manual” triggering of the tooltip. Tooltips with zero-length titles are never displayed.

el.hideTooltip();
Hides an element’s tooltip. Returns to the caller before the tooltip has actually been hidden (i.e. before the hidden.bs.tooltip event occurs). This is considered a “manual” triggering of the tooltip.

el.toggle();
Toggles an element’s tooltip. Returns to the caller before the tooltip has actually been shown or hidden (i.e. before the shown.bs.tooltip or hidden.bs.tooltip event occurs). This is considered a “manual” triggering of the tooltip.

el.dispose();
Hides and destroys an element’s tooltip. Tooltips that use delegation (which are created using the selector option) cannot be individually destroyed on descendant trigger elements.

el.enable();
Gives an element’s tooltip the ability to be shown. <strong>Tooltips are enabled by default</strong>.

el.disable();
Removes the ability for an element’s tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.

el.toggleEnabled();
Toggles the ability for an element’s tooltip to be shown or hidden.

el.update();
Updates the position of an element’s tooltip.


## Events
