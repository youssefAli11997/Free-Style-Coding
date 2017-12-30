: '

A simple script that can be used to download indexed files from a directory with wget
I used it do download Quran audio files as a demonstration

'
directory="https://archive.org/download/Nasr-Qatami/"
extension=".mp3"
index=""

for (( i=1; i <= 114; i++ ))
do
	if [ "$i" -lt "10" ]
	then
		index="00$i"
	else
		if [ "$i" -lt "100" ]
		then
			index="0$i"
		else
			index="$i"
		fi
	fi
	wget -O "~/Quran/$index$extension" "$directory$index$extension"
	#echo "$directory$index$extension"
done
