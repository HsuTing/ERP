'use strict';

export default submit => e => {
  if(e.key === 'Enter')
    submit();
};
