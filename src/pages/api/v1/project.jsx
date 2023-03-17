export default async(req, res) => { 
    const project = [
        {
            "name": "Nothing's",
            "link": "https://i.imgur.com/yIFgDbh.png",
            "description": "About ME and ETC.",
            "html_url": "https://github.com/VacTuzX-dot/VacTuzX-dot"
        
        },
    ]
    res.status(200).json(project)
}
