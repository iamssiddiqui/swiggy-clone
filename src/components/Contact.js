const Contact = () => {
    return (
        <div>
            <h3 className="text-4xl text-green-400 my-5 text-center">Get In Touch</h3>
            <p className="text-4xl text-green-400 my-5 text-center">Got any query? Feel free to contact.</p>
            <form>
            <input className="block bg-pink-100 w-full h-10 text-black text-2xl my-3" type="text" name="name" placeholder="Name" />
                <input className="block bg-pink-100 w-full h-10 text-black text-2xl my-3" type="text" name="phone" placeholder="Phone" />
                <input className="block bg-pink-100 w-full h-10 text-black text-2xl my-3" type="text" name="subject" placeholder="Subject" />
                <input className="block bg-pink-100 w-full h-10 text-black text-2xl my-3" type="email" name="email" placeholder="E-mail" />
                <textarea className="block bg-pink-100 w-full h-120 text-black text-2xl my-3" placeholder="Type your message here"></textarea>
                <input className="p-2 m-2 bg-purple-900 text-white rounded-xl hover:bg-gray-500 cursor-pointer" type="submit" value="Submit Now" />
            </form>
        </div>  
    )
}

export default Contact