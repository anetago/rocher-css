
## Spacing

## Typegraphy

We provide the bacic styling on header tags.

### Alignment

- `.txt-rgt` : Right alignment
- `.txt-ctr` : Centerize
- `.txt-lft` : Left alignment

### Header

```html
<h1>Heading h1</h1>
<h2>Heading h2</h1>
<h3>Heading h3</h1>
<h4>Heading h4</h1>
<h5>Heading h5</h1>
<h6>Heading h6</h1>
```

### Blockquotes

```html
<blockquote>
    <p>T</p>
</blockquote>
```

#### `.itaric`

#### `.strike`

## Grid

The grid system is fluid system with a relative width of the device width, and that shrink with the viewport.

### Frexible gird

A simple way to build flexible responsive columns:

- Add the class into `.row` element.
- Add as many `.col` element as you want.

```html
<div class="row">
    <div class="col"><span>.col</span></div>
</div>fle
<div class="row">
    <div class="col"><span>.col</span></div>
    <div class="col"><span>.col</span></div>
    <div class="col"><span>.col</span></div>
</div>
```

### Sizing columns
You can also specify the size of the coulmns through **12th**.

 - Add the class into `.row` element.
 - Add a `.col-n` child element where **n** is the number can from 1 to 12.

```html
<div class="rocher">
    <div class="row">
        <div class="col-1"><span>.col-1</span></div>
        <!-- also you can repeat above on 11 times  -->
    </div>
    <div class="row">
        <div class="col-4"><span>.col-4</span></div>
        <!-- also you can repeat twice above these tags  -->
    </div>
    <div class="row">
        <div class="col-12"><span>.col-12</span></div>
    </div>
</div>
```

## Button

## Tables

## Forms

## Color

`.hidden`


## Utilities

### Animation
Animation is reuseable classes that you can
use to emphasize elements. 

#### Fade In
The `.fade-in` class can run to fade in an element on the page. Note that this class can run once and takes **1 second** when the element is revealed.

```html
<div>
    <div class="fade-in">
        <strong>This sentence will fade in</strong>
    </div>
</div>
```

#### Fade Out
The `.fade-out` class can run to fade out an element on the page. Note that this class can run once and takes **1 second** when the element is revealed.

```html
<div>
    <div class="fade-out">
        <strong>This sentence will fade in</strong>
    </div>
</div>
```


#### Fade Up
The `.fade-up` class reveals an element on sliding it up from below the fold. Note that you should use this class in the parent block or container with `overflow:hidden;` or the bottom of the page. And this class can run once and takes **2 second** when the element is revealed.

```html
<!-- You should insert the 'overflow:hidden;' style -->
<div style="overflow:hidden;">
    <div class="fade-up">
    <strong>This sentence will fade out</strong>
    </div>  
</div>
```




#### Fade Down


