import * as React from "react"
import ButtonAppBar from "../components/AppBar/AppBar";
import {Avatar, Button, Card, TextField} from "@mui/material";

const IndexPage: React.FC = (): React.ReactElement => {
  const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    height: '100vh',
    margin: 0,
    padding: 0
  }

  let [upvote1, setUpvote1] = React.useState(0);
  let [downvote1, setDownvote1] = React.useState(0);

    let [upvote2, setUpvote2] = React.useState(0);
    let [downvote2, setDownvote2] = React.useState(0);


    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

  return (
    <main style={pageStyles}>
      <div style={{ height: '50px', border: '1px solid #212129', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '20px'}}>
          <path d="M0 18C0 25.7075 4.82115 32.2731 11.6247 34.8423V1.15771C4.82115 3.72688 0 10.2925 0 18Z" fill="#DC1928"/>
          <path d="M18 0C17.5083 0 17.0009 0.015859 16.5251 0.0475771V1.3163H16.6202C23.4713 1.36388 28.9903 6.59736 28.9427 13.0044C28.8951 19.3797 23.3445 24.5181 16.5251 24.5022V35.9366C17.0167 35.9841 17.5083 36 18 36C27.9436 36 36 27.9436 36 18C36 8.05639 27.9436 0 18 0Z" fill="#DC1928"/>
        </svg>
        <div style={{ marginLeft: '12px'}}>Bug Bounty</div>
        </div>
        <div style={{ marginRight: '20px'}}>John Doe</div>
      </div>
      <TextField
          id="filled-search"
          label="Search for an accessibility issue"
          type="search"
          variant="standard"
          style={{ width: '500px', marginTop: '20px', marginLeft: '20px', marginBottom: '40px'}}
      />

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Avatar {...stringAvatar('Ken Doe')} style={{marginLeft: '20px' }}/>
            <div style={{ marginLeft: '20px'}}>Ken Doe</div>
        </div>
        <Card variant="outlined" style={{ width: '500px', margin: '20px 0 20px 50px'}}><div style={{ padding: '20px'}}>Australia Post shop does not have a wheelchair ramp. I can't access my services! >:(</div></Card>
        <div style={{ marginLeft: '50px', marginBottom: '30px', display: 'flex', alignItems: 'center'}}>
            <Button variant="contained" color="success" onClick={() => setUpvote1(upvote1 + 1)}>
                Upvote
            </Button>

            <div style={{ marginLeft: '12px', marginRight: '12px', color: 'green' }}>+ {upvote1}</div>

            <Button variant="contained" color="error" style={{ width: '100px', marginLeft: '12px'}} onClick={() => setDownvote1(downvote1 + 1)}>
                Downvote
            </Button>

            <div style={{ marginLeft: '12px', marginRight: '12px', color: 'red' }}>- {downvote1}</div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Avatar {...stringAvatar('John Woe')} style={{marginLeft: '20px' }}/>
            <div style={{ marginLeft: '20px'}}>John Woe</div>
        </div>
        <Card variant="outlined" style={{ width: '500px', margin: '20px 0 20px 50px'}}><div style={{ padding: '20px'}}>The Australia Post shop is hard to see, colours are too plain and as someone who has visual impairment, I am struggling to navigate through the website.</div></Card>

        <div style={{ marginLeft: '50px', marginBottom: '30px', display: 'flex', alignItems: 'center'}}>
            <Button variant="contained" color="success" onClick={() => setUpvote2(upvote2 + 1)}>
                Upvote
            </Button>
            <div style={{ marginLeft: '12px', marginRight: '12px', color: 'green' }}>+ {upvote2}</div>

            <Button variant="contained" color="error" style={{ width: '100px', marginLeft: '12px'}} onClick={() => setDownvote2(downvote2 + 1)}>
                Downvote
            </Button>
            <div style={{ marginLeft: '12px', marginRight: '12px', color: 'red' }}>- {downvote2}</div>
        </div>
    </main>
  )
}

export default IndexPage
