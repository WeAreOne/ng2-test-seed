import {
  async,
  inject,
  TestComponentBuilder,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { BorderComponent } from '../app/border-component';

@Component({
  template: '',
  directives: [BorderComponent]
})
class TestComponent {
}

describe('greeting component', () => {
  it('should wrap content', async(inject([TestComponentBuilder], (tcb) => {
    tcb.overrideTemplate(TestComponent, '<my-fancy-border>Content</my-fancy-border>')
        .createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
          fixture.detectChanges();
          var compiled = fixture.debugElement.nativeElement;

          //expect content to be Content
        });
  })));

  it('should include a title', async(inject([TestComponentBuilder], (tcb) => {
    tcb.overrideTemplate(TestComponent, '<my-fancy-border title="ABC"></my-fancy-border>')
        .createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
          fixture.detectChanges();
          var compiled = fixture.debugElement.nativeElement;

          //expect title to be ABC
        });
  })));
});
