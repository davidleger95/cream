import React, { FC } from 'react';
import { styled } from 'linaria/react';
import { motion, AnimatePresence } from 'framer-motion';

const accountsGridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const StyledAccountsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  align-self: start;
`;

const AccountsGrid: FC = ({ children }) => {
  const childArray = Array.isArray(children) ? children : [children];
  return (
    <StyledAccountsGrid
      variants={accountsGridVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {childArray.map((child, i) => (
          <motion.div key={i} variants={cardVariants} exit="hidden">
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </StyledAccountsGrid>
  );
};

export default AccountsGrid;
