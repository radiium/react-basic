import { useRouteError } from 'react-router';
import { DemoPage } from '../components/FormField';

export function PageError() {
    const error = useRouteError();
    console.error(error);
    return (
        <DemoPage title="Page Error">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <p>{!!error && <i>{error.statusText || error.message}</i>}</p> */}
        </DemoPage>
    );
}
