import React, { useRef, useState } from 'react'
import UserNavbar from '../components/UserNavbar'
import UserFooter from '../components/UserFooter'

const BrowseTools = () => {

    const toolList = [
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/3/834x_01_hero_main_1.jpg',
            description: 'ANGLE-IZER® Locking Contour Gauge with Extra Long Pins, Profile Gauge, Shape Duplicator, 10-Inch (254mm), Precisely Copy Irregular Shapes For Perfect Fit and Easy Cutting',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/3/833x_01_hero_main_1.jpg',
            description: 'ANGLE-IZER® Contour Gauge with Lock, Profile Gauge, Shape Duplicator, 10-Inch (254mm), Precisely Copy Irregular Shapes For Perfect Fit and Easy Cutting',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/3/736_level_motion_app1.jpg',
            description: 'ANGLE-IZER® Angle Finder, 3 in 1: Level, T-Square & Sliding Set Square',
            category: 'Angle-Izer',
        },
        {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
            description: 'ANGLE-IZER® Backlit Digital Bevel Box Angle Finder, Large Backlit LCD, Rotating Display, Magnetic Base',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/3/8361_prod_group_open_1000px.jpg',
            description: 'ANGLE-IZER® Template Tool Set, ANGLE-IZER® & ANGLE-IZER® Gauge, 45/60/75/90-degree angles',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/3/835.jpg',
            description: 'ANGLE-IZER® PRO Template Tool',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/2/828_b.jpg',
            description: 'ANGLE-IZER® Digital Sliding T-Bevel & Protractor in One',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/2/823_c.jpg',
            description: 'ANGLE-IZER® Digital Angle Finder, 10 in.',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/g/t/gt_928_digital_t_bevel_hero_main_website.jpg',
            description: 'ANGLE-IZER® Digital T-Bevel with Bubble Level',
            category: 'Angle-Izer',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/0/80560_a.jpg',
            description: 'Telescoping Lighted 2 x 3 In. Glass Inspection Mirror',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/0/80557_a1.jpg',
            description: 'Telescoping Lighted 1-7/8 In. Round Glass Inspection Mirror',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/5/759582_a.jpg',
            description: 'Telescoping Lighted Magnetic Pickup',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/0/70399.jpg',
            description: 'Lighted Steel Claw Mechanical Pick-Up Tool, 36-Inch',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/5/5/553.jpg',
            description: '4X Lighted Pocket Magnifier',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/5/6/565.jpg',
            description: 'Rectangular Lighted Magnifier',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/5/8/582_a.jpg',
            description: 'Magnetic Pick Up Tool with Powerful LED Mini-Lite, Rustproof Chrome Plated Brass Extender Wand, Telescoping Reach to 29-Inch, 2lb Pull Capacity Grabber/Retrieving Magnet',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/0/70391_a.jpg',
            description: '36 in. Lighted Magnetic/Mechanical Pickup',
            category: 'Inspection and Retrieval',
        },
        {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
            description: 'Pencil Compass and Scriber – Adjustable up to 8 inches',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/3/836.jpg',
            description: 'ANGLE-IZER® Digital Sliding T-Bevel & Protractor in One',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/2/9/29_b.jpg',
            description: 'ANGLE-IZER® Plastic Protractor',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/1/7/17_a.jpg',
            description: 'ANGLE-IZER® Square Head Stainless Steel Angle Protractor, 0 to 180 Degrees, 6-Inch Arm',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/1/818_a.jpg',
            description: 'Scratch Awl',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/0/803.jpg',
            description: 'Stair Gauge Set',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/1/812ca_a.jpg',
            description: "Clamp Assembly for #812 Professional Carpenter's Combination Square",
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/0/70079_c_.jpg',
            description: 'Utility Automatic Center Punch',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/5/2/524.jpg',
            description: 'Precision Trammel Set',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/4/5/452-8.jpg',
            description: '8 In. Outside Caliper',
            category: 'Precision Measuring and Marking'
        },
        {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
            description: 'General Tools 117 Piece Precision Screwdriver Set and Electronics Repair Kit',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
            description: 'General Tools 5 Piece Precision Screwdriver Set',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/6/0/604x-oop_1.png',
            description: 'General Tools 5 Piece Extended Length Screwdriver Set',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/5/1/510-q_main_1200px.jpg',
            description: 'Convertible Powered Screwdriver with LED Light',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
            description: 'General Tools 10 Piece Precision Screwdriver Set',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/5/0/502_b.jpg',
            description: 'Cordless Lighted Power Screwdriver',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/5/0/505b.jpg',
            description: 'Replacement 6-Bit Set for #500 Cordless Power Screwdriver and #502 Cordless Lighted Power Screwdriver',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/6/3/63517_open_case_b_.jpg',
            description: '18-piece Precision Screwdriver & Probe Set',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/6/0/601cd_a.jpg',
            description: 'Eyeglass Repair Kit, Countertop Display',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/6/0/601_a.jpg',
            description: 'Eyeglass Repair Kit',
            category: 'Precision & Specialty Screwdrivers'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/2/72_a_1.jpg',
            description: 'Leather Hole Punch Tool, 5/64 Inch to 3/16 Inch',
            category: 'Special Purpose'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/1/71264_group_a_1.jpg',
            description: '1/2 in. Grommet Kit',
            category: 'Special Purpose'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/s/p/spc76_group_a_1.jpg',
            description: '8 In. Drive Pin Punches, Five-piece Set',
            category: 'Special Purpose'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/7/1/71262_c__1.jpg',
            description: '3/8 In. Grommet Kit',
            category: 'Special Purpose'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/1/9/190_l_a_1.jpg',
            description: '190 Adjustable Sink Wrench, 10 1/4-Inch Long, Jaws Fit 1-Inch to 3-Inch Wide Spud, Slip, Lock and Basket-Strainer Nuts, Zinc Plated',
            category: 'Special Purpose'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/1/8/189_009_1.jpg',
            description: 'Undersink Drain Pliers',
            category: 'Special Purpose'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/1/8/1882_1.jpg',
            description: '29/32 In. and 31/32 In. Shower Valve Wrench',
            category: 'Special Purpose'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/6/861_a.jpg',
            description: 'E-Z Pro Dovetailer II Dovetail Jig',
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/t/s/ts02_silhouetted.jpg',
            description: 'ToolSmart™ Bluetooth Connected Digital Angle Finder',
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/5/850_main.jpg',
            description: 'E-Z Pro Deluxe Pocket Hole Jig Kit',
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/8/881_a1.jpg',
            description: 'E-Z Pro Crown King Molding Jig with Protractor',
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/l/d/ldm2_h_rev.jpg',
            description: "LDM2, 65' Compact Laser Measure, Continuous Measurement, Hi-Visibility, White On Black Screen",
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/5/854_l_a.jpg',
            description: 'Adjustable Pocket Hole Jig Kit',
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/7/870b_a.jpg',
            description: 'Replacement Router Bit for #870 E-Z Pro Mortise & Tenon Jig Kit',
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/5/8562_900px_300ppi.jpg',
            description: 'Face Frame Jig System X2',
            category: 'Woodworking'
        },
        {
            image: 'https://generaltools.com/media/catalog/product/cache/191c229121fcc9b6d185471978c8e15d/8/6/860_golddovetailer.jpg',
            description: 'E-Z Pro Dovetailer Jig',
            category: 'Woodworking'
        }
    ]

    const [browseToollist, setBrowseToollist] = useState(toolList);
    const [category, setCategory] = useState('');
    console.log(browseToollist.length);

    const handleFilter = (e) => {
        // console.log(e.target.value);
        const filteredCategory = e.target.value;
        setCategory(filteredCategory);
        if(filteredCategory === 'all'){
            setBrowseToollist(toolList);
            return toolList;
        }
        const filteredToolList = toolList.filter((tool)=>{
            return tool.category === filteredCategory;
        })
        console.log(filteredToolList);
        setBrowseToollist(filteredToolList);
        return filteredToolList;
    }

    console.log(category);

    return (
        <div className='bg-gray-100'>
            <UserNavbar />
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold mt-5'>Browse Tools</h1>
                <p className='text-xl text-gray-600'>Browse through our wide range of tools</p>
            </div>
            <section className='bg-gray-200 flex-col md:flex-row flex gap-0 md:gap-6 my-10'>
                <div className='p-4'>
                    <div className='bg-gray-400/50 rounded p-4 sticky top-[100px]'>
                        <h2 className='text-3xl font-bold mb-5'>Filters</h2>
                        <div className='flex flex-col gap-4'>
                            <label className='text-xl'>Category</label>
                            <select onChange={(e)=>{handleFilter(e)}} className='p-2 rounded outline-none border-none'>
                                {/* <option value='null'>Select Category</option> */}
                                <option value='Angle-Izer'>Angle-Izer</option>
                                <option value='Inspection and Retrieval'>Inspection and Retrieval</option>
                                <option value='Precision Measuring and Marking'>Precision Measuring and Marking</option>
                                <option value='Precision & Specialty Screwdrivers'>Precision & Specialty Screwdrivers</option>
                                <option value='Special Purpose'>Special Purpose</option>
                                <option value='Woodworking'>Woodworking</option>
                                <option value='all'>All Tools</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='p-5 md:p-0'>
                    {
                        category === ''?null:(<div>
                            <h1 className='text-center text-2xl capitalize'>{category} tools </h1>
                            <p className='text-gray-400 text-center'>{browseToollist.length} items </p>
                        </div>)
                    }
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
                    {
                        browseToollist.map((tool, index) => {
                            return (
                                <div key={index} className='bg-white shadow-lg rounded p-5'>
                                    <img src={tool.image} className='w-full h-60 object-contain' />
                                    <p className='text-lg font-semibold my-2'>{tool.description}</p>
                                    <p className='text-sm text-gray-600'>{tool.category}</p>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </section>
            <UserFooter />
        </div>
    )
}

export default BrowseTools