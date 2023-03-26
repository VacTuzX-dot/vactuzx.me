export default async(req, res) => { 
    const project = [
        {
            "name": "Nothing's",
            "link": "https://i.imgur.com/yIFgDbh.png",
            "description": "About ME and ETC.",
            "html_url": "https://github.com/VacTuzX-dot/VacTuzX-dot"
        
        },
        {
            "name": "TypeX",
            "link": "https://i.imgur.com/tU0cm4V.png",
            "description": "This website is to practice your typing skills. and have indicators such as WPM (speed), Accuracy",
            "html_url": "https://type-x.vercel.app"
        
        },
        {
            "name": "WeatherX",
            "link": "https://i.imgur.com/PCFZ115.png",
            "description": "This website checks the weather conditions of different countries.",
            "html_url": "https://weather-x-lac.vercel.app"
        
        }
    ]
    res.status(200).json(project)
}
