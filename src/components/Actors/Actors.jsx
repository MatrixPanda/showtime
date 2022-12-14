import React from 'react';

// NOTE: steps to make it work
// use useParams to get the actor's id
// make a new call using redux toolkit query -> get actor details call...
// research tmdb api docs for that particular api usage
// use newly created useGetActorHook to get actor's info to the component

const Actors = () => {
  console.log('Actors');

  return (
    <div>Actors</div>
  );
};

export default Actors;
