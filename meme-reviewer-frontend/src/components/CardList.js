const [playerData, setPlayerData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://nba-players.herokuapp.com/players-stats')
            const nbaData = await response.json()
            setPlayerData(nbaData.slice(0, 15))
        }
        fetchData()
    }, [])