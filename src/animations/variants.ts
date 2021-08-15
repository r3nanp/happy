const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const pulse = {
  pulseEffect: {
    scale: [1, 1.1, 1, 1.2, 1, 1],
    transition: {
      delay: 1
    }
  }
}

export { container, item, pulse }
