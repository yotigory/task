import { Copyright } from '@galaxy/shifter';

export const Footer = () => {
  return (
    <footer className="mb-5 mt-5 border-top pt-5">
      <Copyright
        serviceName="Shifter"
        today={new Date('2010-01-01T00:00:00.000Z')}
      />
    </footer>
  );
};
