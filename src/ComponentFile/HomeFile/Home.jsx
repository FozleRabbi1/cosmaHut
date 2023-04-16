import { Card, Dropdown } from 'flowbite-react';
import React from 'react';

const Home = () => {
    return (
        <div className='w-full bg-green-500 flex'>
            <div className="max-w-sm">
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>

            <div className="">
            <Dropdown label="Dropdown button">
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    Separated link
                </Dropdown.Item>
            </Dropdown>
            </div>
        </div>
    );
};

export default Home;