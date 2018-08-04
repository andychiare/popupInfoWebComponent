# popupInfoWebComponent
A popup info box implemented as a Web Component.
It is based on the MSDN Web component [popup-info-box-web-component](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) with very few differences.

It enables you to use the tag `<popup-info/>` inside an HTML page where you want to show an information icon.
You have to use the `data-text` attribute to specify the text you want to display when the user move the mouse over the information icon, as in the following example:

```html
<popup-info data-text="This information is for you.">
```

Optionally, you can show your own icon by using the `img` attribute:

```html
<popup-info img="images/information.png" data-text="This information is for you.">
```

