import createBrowserHistory from 'history/createBrowserHistory';
import { BASENAME } from '../../app.constants';

export default createBrowserHistory({ basename: BASENAME });
