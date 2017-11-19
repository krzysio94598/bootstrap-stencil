import { Component, Element, Method, Prop, PropDidChange, PropWillChange } from '@stencil/core';

@Component({
  tag: 'bs-tooltip',
  styleUrl: 'bs-tooltip.scss'
})
export class Tooltip {

  @Prop()
  animation: boolean;

  @Prop()
  container: string | boolean;

  @Prop()
  delay: number | TooltipDelay;

  @Prop()
  disabled: boolean;

  @Element()
  element: HTMLElement;

  @Prop()
  html: boolean = false;

  @Prop()
  placement: string;

  @Prop()
  show: boolean;

  @Prop()
  title: string;

  // @Method()
  tooltip(options?: TooltipOptions) {
    console.log('tooltip->tooltip', options);
    if (typeof options === 'undefined') {
      $(this.element).tooltip();
    } else {
      $(this.element).tooltip(options);
    }
  }

  componentWillUpdate() {
    console.log('The component will update');
    this.updateProperties();
    this.update();
  }

  @PropWillChange('placement')
  willChangeHandler(newValue: boolean) {
    console.log('The new value of placement is: ', newValue);
  }

  @PropDidChange('placement')
  didPlacementChangeHandler(placement: string) {
    console.log('tooltip->didPlacementChangeHandler', placement, this.placement);
    this.setProperty('data-placement', this.placement);
    // themeDidChange(this.element, this.placement, 'alert');
  }

  @Method()
  tooltipDispose() {
    console.log('tooltip->dispose');
    $(this.element).tooltip('dispose');
  }

  @Method()
  disable() {
    console.log('tooltip->disable');
    $(this.element).tooltip('disable');
  }

  @Method()
  enable() {
    console.log('tooltip->enable');
    $(this.element).tooltip('enable');
  }

  @Method()
  tooltipHide() {
    console.log('tooltip->hide');
    $(this.element).tooltip('hide');
    // $(this.element).hide(); // - test
  }

  @Method()
  tooltipShow() {
    console.log('tooltip->show');
    $(this.element).tooltip('show');
    // $(this.element).show(); // - test
  }

  @Method()
  toggle() {
    console.log('tooltip->toggle');
    $(this.element).tooltip('toggle');
    // $(this.element).toggle();
  }

  @Method()
  toggleEnabled() {
    console.log('tooltip->toggleEnabled');
    $(this.element).tooltip('toggleEnabled');
  }

  @Method()
  update() {
    console.log('tooltip->update');
    $(this.element).tooltip('update');
  }

  componentWillLoad() {
    this.updateProperties();
    this.tooltip();
    if (this.show) {
      this.tooltipShow();
    }
    if (this.disabled) {
      this.disable();
    }
  }

  render() {
    console.log('Tootip->render');
    return (<slot />);
  }

  private updateProperties() {
    console.log('Tootip->updateProperties', this.placement);

    if (typeof this.animation !== 'undefined') {
      this.setProperty('data-animation', this.animation.toString());
    }
    if (typeof this.container !== 'undefined') {
      this.setProperty('data-container', this.container.toString());
    }
    if (typeof this.delay !== 'undefined') {
      // if (typeof this.delay === typeof TooltipDelay) {
      // }
      this.setProperty('data-delay', this.delay.toString());
    }
    if (this.html) {
      this.setProperty('data-html', 'true');
    }

    if (typeof this.placement !== 'undefined') {
      this.setProperty('data-placement', this.placement);
    }
    this.setProperty('data-toggle', 'tooltip');
    this.setProperty('title', this.title);
  }

  private setProperty(name: string, value: string) {
    const typ = document.createAttribute(name);
    typ.value = value;
    this.element.attributes.setNamedItem(typ);
  }

}

export class TooltipDelay {
  show: number;
  hide: number;
}

export class TooltipOptions {
  animation: boolean;
  container: string;
  delay: TooltipDelay;
  html: boolean;
  placement: string | Function;
  selector: string;
  template: string;
  title: string;
  trigger: string;
  offset: number | string;
  fallbackPlacement: string | Int32Array;
}
