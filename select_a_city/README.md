Correctly apply useEffect (and useRef if needed) to API calls for city names

App is a simple demo app just for this issue, so no big codebase to wade through.

Please grab an API key from rapidAPI for a free plan under

https://rapidapi.com/wirefreethought/api/geodb-cities

and put it in a .env file in the root in the format REACT_APP_X_RAPIDAPI_KEY='8e27...'

I ask you to do this becuase every time I've messed up implementing this I fire off loads off API queriues from infinite loops and I want to avoid you running into that problem.  Just in case.

For the free account... type your UI tests slowy (1 query per second)!

If you get stuck I can supply a temporary key for my paid account.

Requirements:

- I want the list of cities to be up-to-date with the typing of the city name.
- When the city name is blank the result list should be empty
- Only 1 API call per keystroke

I expect you to use useEffect, possibly useRef.  Not going the context path.

- Smaller changes without linting side effectsd are prefered.

a PR is the ideal answer.


