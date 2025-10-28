import express from express;
import fs from fs;

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/world", async (req, res) => 
    {
        console.log("called get");
        const dataString = await fs.readFileSync("world.json", "utf-8");
        const dataObject = json.parse(dataString);
        console.log(dataObject);
        res.json(dataObject);

    })

app.post('/update', async (req, res) => 
    {
        const worldData = await fs.readFileSync("world.json", "utf-8");
        const data = json.parse(worldData);

        const updates = req.body;
 
        for(let region of data.regions) 
        {
            for(let town of region.towns) 
            {
                for(let person of town.notable_people) 
                {
                    if (person.name === updates.select-person) 
                    {
                        person.items.clearance = updates.new-clearance;
                    }
                }
            }
        }

        await fs.writeFileSync("world.json", json.stringify(data, null, 2));
        res.json(data)
    })

app.listen(3000, () => console.log("Server running on http://localhost:3001"));