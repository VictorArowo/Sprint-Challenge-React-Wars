# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

 - React JS is a javascript library used for building user interfaces.  Manual manipulation of the DOM is an expensive operation in terms of time and performance. React        solves this problem by keeping a virtual DOM in memory which it makes changes to. It then compared this virtual DOM to the actual DOM on the page, and only updates the     elements which require updates.

2. What does it mean to think in react?

- Thinking in react is the recommended thought process to go through when building react applications. It is a five step process listed below:
    - Breaking the UI into an heirachy of components
    - Building a static version of react
    - Identify the minimal representation of UI state
    - Identify where state should live
    - Implement inverse data flow


3. Describe state.

 - States hold a particular information in a component. They are local to that component, and the component rerenders whenever there is a change in state.

4. Describe props.

 - State in react is passed down to child components as props. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

 - A side effect is an operation that affects something outside th escope of the function or method it's being called in. API calls are side effects. In react side effects are typically done in the useEffect hook. useEffect takes in an optional second parameter which specifies constraints determining when useEffect runs.