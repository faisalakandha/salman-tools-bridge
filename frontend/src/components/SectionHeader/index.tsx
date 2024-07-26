const SectionHeader = (props:{name:string}) => {

    return(
        <div className="p-8 text-xl font-semibold">
            {props.name}
        </div>
    );
}

export default SectionHeader;