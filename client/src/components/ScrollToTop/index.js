import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Scroll back to top of page
function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);
  return (null);
}

export default withRouter(ScrollToTop);