"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TerminalMock = () => {
    const commands = [
        "nmap -sS -sV -Pn -T4 10.10.10.10",
        "wfuzz -c -z file,/usr/share/wordlists/dirb/common.txt --hc 404 http://target.local/FUZZ",
        "sqlmap -u 'http://ctf.local/product?id=5' --batch --dbs",
        "curl -s -X POST http://ctf.local/login -d 'user=admin&pass=admin' -H 'Content-Type: application/x-www-form-urlencoded'",
        "python3 exploit.py --rhost 10.129.14.2 --lhost 10.10.14.23 --lport 4444",
        "cat /var/www/html/config.php | grep password",
        "gdb -q ./vuln --ex 'b *main+128' --ex run",
        "echo Y3RmMXtzM2NyM3RfYjB4X3YzcnNpb259Cg== | base64 -d",
        "./decode_me | strings | grep 'flag{'",
        "ssh -i id_rsa root@10.10.14.3",
    ];

    return (
        <div className="bg-black text-green-400 font-mono rounded-lg shadow-lg px-5 pt-5 w-full max-w-3xl mx-auto h-56 flex flex-col gap-4">
            <div className="bg-black text-green-400 font-mono rounded-lg shadow-lg px-5 pt-5 w-full max-w-3xl mx-auto h-56 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-green-300">
                    <span className="break-all">
                        matthew@kali:~${" "}
                        <span className="text-white break-all">
                            <Typewriter
                                words={commands}
                                cursorColor="white"
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={40}
                                deleteSpeed={20}
                                delaySpeed={2000}
                            />
                        </span>
                    </span>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-end ">
                <Link href="/writeups" className="my-4">
                    <button className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-primary border border-green-400 hover:bg-background transition bg-transparent text-green-400">
                        View All Writeups
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TerminalMock;
