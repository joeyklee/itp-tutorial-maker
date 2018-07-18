// This is the Link API
import Link from 'next/link'


const Nav = () => (
	<nav>
    <Link href="/">
        <a>Home Page</a>
    </Link>
  	<Link href="/about">
  		<a>About Page</a>
  	</Link>
  	<style jsx>{`

  	      nav{
  	      	width: 100%;
  	      	height: 100%;
            max-width:960px;
  	      	display:flex;
  	      	flex-direction: row;
  	      	justify-content: center;
  	      	align-items:center;
  	      }
  	      nav a{
  	      	margin-right: 20px;
  	      }
  	    `}</style>
	</nav>
	
)

export default Nav