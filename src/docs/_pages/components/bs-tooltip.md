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

<bs-card card-title="Bootstrap Buttons">
  <div>abc</div>
  <bs-button theme="primary">Primary</bs-button>
  <bs-button theme="secondary">Secondary</bs-button>
  <bs-button theme="success">Success</bs-button>
  <bs-button theme="danger">Danger</bs-button>
  <bs-button theme="warning">Warning</bs-button>
  <bs-button theme="info">Info</bs-button>
  <bs-button theme="light">Light</bs-button>
  <bs-button theme="dark">Dark</bs-button>
  <bs-button theme="link">Link</bs-button>
</bs-card>

<p>Four options are available: top, right, bottom, and left aligned.</p>

<bs-card card-title="static demo">
  <div class="flex" style="height: 100px;">
    <div style="flex: 0 0 1;">
      <bs-tooltip placement="top" title="Tooltip on top" show disabled>
        <bs-button theme="primary">Primary</bs-button>
      </bs-tooltip>
    </div>
    <div style="flex: 0 0 1;">
      <bs-tooltip animation="false" placement="right" title="Tooltip on right" show disabled>
      </bs-tooltip>
    </div>
    <div style="flex: 0 0 1;">
      <bs-tooltip placement="bottom" title="Tooltip on bottom" show disabled>
      </bs-tooltip>
    </div>
    <div style="flex: 0 0 1;">
      <bs-tooltip placement="left" title="Tooltip on left" show disabled>
      </bs-tooltip>
    </div>
  </div>
</bs-card>


### Interactive demo

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
