'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import '@/app/dashboard/style/push-nft.css'
import Segment from '@/components/ui/segmant';
import axios from 'axios';
export default function Page() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('ton'); 
    const [NFT, setNFT] = useState(null);
    const [messege, setMessege] = useState('')
    let id: any;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }      
    const segments = [
        { label: 'TON', value: 'ton' },
        { label: 'SOLANA', value: 'sol' },
    ];
    return (
        <main>
            <Card>
                <CardHeader>
                    <CardTitle>Publish NFT</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-2">
                        <div className="upload-container">
                            <label htmlFor="fileUpload" className="upload-button">Select File to Upload</label>
                            <Input
                                type="file"
                                id="fileUpload"
                                name="file"
                            />
                        </div>
                        <div>
                            <label>Name:</label>
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Price:</label>
                            <Input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Currency:</label>
                            <Segment segments={segments} onSegmentChange={setCurrency} />
                        </div>
                        <div>
                            <Button type="submit">Publish NFT</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div><h1>{messege}</h1></div>
        </main>
    );
}


