import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const SocialShareButtons = ({ workoutLogs }) => {
  const totalWorkouts = workoutLogs.length;
  const totalWeightLifted = workoutLogs.reduce(
    (total, workout) => total + workout.totalWeight,
    0
  );
  const shareMessage = `I've completed ${totalWorkouts} workouts and lifted a total of ${totalWeightLifted} lbs! Check out my progress!`;

  return (
    <div className="flex space-x-4">
      <FacebookShareButton
        url={window.location.href}
        quote={shareMessage}
        hashtag="#FitnessJourney"
      >
        <FacebookIcon size={30} round />
      </FacebookShareButton>

      <TwitterShareButton url={window.location.href} title={shareMessage}>
        <TwitterIcon size={30} round />
      </TwitterShareButton>

      <LinkedinShareButton url={window.location.href} summary={shareMessage}>
        <LinkedinIcon size={30} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShareButtons;