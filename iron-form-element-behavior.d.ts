/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-form-element-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />

declare namespace Polymer {

  /**
   *   Polymer.IronFormElementBehavior enables a custom element to be included
   *   in an `iron-form`.
   *
   *   Events `iron-form-element-register` and `iron-form-element-unregister` are not fired on Polymer 2.0.
   *
   *   
   */
  interface IronFormElementBehavior {

    /**
     * The name of this element.
     */
    name: string|null|undefined;

    /**
     * The value for this element.
     */
    value: string|null|undefined;

    /**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * Polymer.IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */
    required: boolean|null|undefined;

    /**
     * The form that the element is registered to.
     */
    _parentForm: object|null|undefined;
    attached: object|null;
    detached: object|null;
  }

  const IronFormElementBehavior: object;
}
