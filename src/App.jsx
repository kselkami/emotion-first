import './App.css'
import FavCard from './components/fav-card/FavCard'
import HeroArticle from './components/hero-article/HeroArticle'
import FavSection from './components/fav-section/FavSection'
import HeroSection from './components/hero-section/HeroSection'
import Navbar from './components/navbar/Navbar'
import HeroContent from './components/hero-content/HeroContent'
import ArticleContainer from './components/article-container/ArticleContainer'

function App() {

  return (
    <div style={{
      width:'100%',
      minHeight:'100vh',
      display:'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems:"center"
    }}>
      <HeroSection>
        <Navbar/>
        <HeroContent />
        <ArticleContainer />
      </HeroSection>
      <FavSection />
      <div style={{
        width: '100%',
        marginBottom: '5rem'
      }}></div>
    </div>
  )
}

export default App
