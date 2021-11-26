## Basics

- Passing props is how information flows in React apps, from parents to children.
- `onClick={() => console.log('click')}`, we’re passing a function as the onClick prop. React will only call this function after a click. Forgetting `() => `and writing `onClick={console.log('click')}` is a common mistake, and **would fire every time the component re-renders**.

## Pure Components

- React components can have state by setting `this.state` in their constructors.
- `this.state` should be considered as private to a React component that it’s defined in. Hence, cant be accessed by derived class
- All React component classes that have a constructor should start with a `super(props)` call.
- When you call setState in a component, React automatically updates the component and the **child components** inside of it too.
- **To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.**
- In React, **function components** are a simpler way to write components that only contain a render method and don’t have their own stat

## Why state object is assigned new instead of modifying/mutating

- React re-render based on changes in state
- state change detection is easier when we just need to compare the object reference instead of checking the whole object
- it also allows to see the history?

## PureComponents

If you’re creating new functions, objects, or arrays in the render method you’re (probably) doing it wrong.  
Refer: [PureComponent](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)

## Notifications

- Two types: local and remote
- remote options: apple, expo, firebase
- locate notifications require various permissions to be enabled at android manifest level to work correctly
- channel is important, without channel notifications wont work
- Common problems with local:
  - Not notifying as per schedule
  - schedule message cannot be change for each new message
  - scheduled notifications can stop working if app is swiped up or killed because of BATTERY OPTIMIZATIONS by android and device OEMs
- Remote notifications:
  - requires firebase configuration setup at android level
  - notification can be received without any package installed at js side, but to do anything with the received notification, some notification package is needed
  - remote notifications will not be received without internet
  - remote notifications can wake up the app and a headless task can be triggered, even when app is swiped up or killed
  - remote notifications can hence be used to schedule timely recurring notifications with different messages. For each remote notification received, just trigger a local notification
  - If background restriction is configured, remote notification will not get delivered if the app is in background

## Misc Notes

- Destructuring incoming props:
  - Why not?: makes it easier to differentiate between local variable and incoming props
  - Why to?: assign default values while destructuring
