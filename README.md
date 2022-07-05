## Angular Directives

Small application to understand Directives in Angular. Show pagination and images that we get from an array of objects and loop through it.

### Topics included

_ngClass, conditionally disable buttons, using multiple structural directives in an element with ng-container, the ngSwitch directive, Custom Directives, receive arguments in directives, intercepting property assignments, input aliasing, custom structural directives _

1. [ ngClass ] is an attribute/property Directive. Meaning it can change the attribute or property of a template element. It is used in square brackets. It will essentially change the class upon some logic applied to it, such logic will return a boolean if it is true then our class will be added to the element that matches the logic. We can also call methods inside ngClass and define the method in the component class where we can have several different classes for one template and by using if statements some elements will have different classes.

2. By using ngClass we can also conditionally disable buttons depending on the array length and index. Also by using a variable in our component class.

3. When we need to use ngIf and ngFor (or any two directives) in the same element, we can do so by using ng-container instead of adding another HTML element. This is because ng-container doesn't create an extra node in the document. This is because the angular rule is there can only be one structural directive in an element.

4. the [ ngSwitch ] directive can produce a value, meaning we can throw a method or property in it that's defined in the class. Inside we can use the method ngSwitchCase and if the value of ngSwitch is same as ngSwitchCase then that's true and the element will be displayed. It is a more complex ngIf that can be used as a Swtich case depending on the value provided in the class component. If the value is the same for different elements, all elements will be displayed. It really just is a swtich statement the Angular way.

5. to create a directive we type **ng g directive nameHere** in the terminal. Inside the ts file we can see a selector between brackets, that's how we are going to use/call our custom directive in the HTML element. If we want to access the particular element where our directive will be used we can import ElementRef then pass it as a argument in the directive class constructor, we then access it by using this.element.nativeElement

6. To receive args in our directives from the template, we can use the property binding syntax in the template and then on the directive class we can use the input decorator to decorate the property that matches the name of the property binded. If Directive selector and set method both have the same name we then can use it inside brackets in our template as we would do with any other native Angular directive.

7. To intercept a property assignment we can instead use the input of our custom property directive using @input with set as this will trick Angular and TS that the element will come and some point and instead define such element not straight away so Angular and TS won't complain about assignations and thread order. See: directive property binded in the template and class.

8. In our directives we can also pass a string inside input() decorator to give it a name to our property that can be referenced from the outside so we can still use brackets in the template.

9. We can use this directives to replace or create custom classes, for example.
10. To build a custom structural directive we use the same command. All directives start the same, it is the code inside the class that will differentiate them. Previous directive was an attribute directive this one will be structural directive (as in \*ngFor) because it will change the structure of the HTML. In structural directives we also use TemplateRef and ViewContainerRef in our imports. See times directive in the app for an example of this.

ViewContainerRef is a reference to the element we apply our directive to. It is different to ElementRef.
TemplateRef is a reference to whatever elements are placed inside the element we are referencing in ViewContainerRef

createdEmbeddedBiew takes two args one is the reference element and the other one is the context argument object, in this obj we can add different properties to make them accesible in our template through the directive.
