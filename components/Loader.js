import gsap from 'gsap';

 const loadingAnimation = () => {
  const tl = gsap.timeline();

  tl.to('#yellow1', {
    top: '-100%',
    delay: 0.5,
    ease: 'expo.out',
    duration: 0.5,
  });

  tl.from(
    '.yellow2',
    {
      top: '100%',
      delay: 0.6,
      ease: 'expo.out',
      duration: 0.5,
    },
    'anim'
  );

  tl.to(
    '.loader h1',
    {
      color: 'black',
      duration: 0.5,
      delay: 0.6,
    },
    'anim'
  );

  tl.to('.loader', {
    display: 'none',
    opacity: 0,
  });
};
export default loadingAnimation