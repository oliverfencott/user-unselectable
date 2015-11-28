# user-unselectable

A React package to easily inline style elements as not user selectable.

### Why?

Because I really don't like using a web app that allows me to select all of the elements and text; I find it clumsy and messy, and I got sick of having to write 

```js
  cursor: 'default',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none'
```

all of the time.

### Getting started

```
npm install --save user-unselectable
```

### How it works

```js

import noSelect from 'user-unselectable';

const style = {
  myFirstUnselectableThing: noSelect({
        fontSize: 35,
        padding: 24,
  }),
  mySecondUnselectableThing: noSelect({
        color: 'red',
        height: 20
  })
};

const MyPrimarilyUnselectableComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div style={style.myFirstUnselectableThing}>
          Good luck trying to select me!
        </div>
        <div style={style.mySecondUnselectableThing}>
          ...and me.
        </div>
      </div>
    );
  }
});
```

<div>
  <style>
    .one {
      font-size: 35px;
      padding: 24px;
    }
    
    .two {
      color: red;
      height: 20px;
    }
    
    .no-select {
      cursor: default;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
  </style>
  <div class='one no-select'>Good luck trying to select me!</div>
  <div class='two no-select'>...and me.</div>
</div>
