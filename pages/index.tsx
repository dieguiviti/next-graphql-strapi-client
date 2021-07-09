/* pages/index.tsx */
import { Button, Alert } from 'reactstrap'

const Home = (): JSX.Element => {
  return (
    <div>
      <div>
        <Alert color='primary'>
          Hello Project is strapi-next with Bootstrap
        </Alert>
        &nbsp;{' '}
        <Button color='primary'>Hello from nextjs</Button>
      </div>
    </div>
  )
}

export default Home
