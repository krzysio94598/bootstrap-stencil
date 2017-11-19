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

<bs-card>
  <div style="height: 100px; width: 200px;">
    <bs-tooltip placement="top" title="Tooltip on top" show disabled>
    </bs-tooltip>
  </div>
  <bs-tooltip animation="false" placement="right" title="Tooltip on right" show disabled>
  </bs-tooltip>
  <bs-tooltip placement="bottom" title="Tooltip on bottom" show disabled>
  </bs-tooltip>
  <bs-tooltip placement="left" title="Tooltip on left" show disabled>
  </bs-tooltip>
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
