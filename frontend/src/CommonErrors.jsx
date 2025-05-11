function CommonErrors({ commonErrors }) {
    if (Object.keys(commonErrors).length !== 0) {
        return (
            <div>
                <h3>Common Errors</h3>
                <div className="common-errors-container">
                    {Object.keys(commonErrors)
                        .sort((a, b) => commonErrors[b] - commonErrors[a])
                        .map((error) => (
                            <p key={error} className="common-error">
                                {error}: {commonErrors[error]}
                            </p>
                        ))}
                </div>
            </div>
        );
    }
}

export const countCommonErrors = (filteredEntries) => {
    let isOneDish = true;
    let oneDish = "";

    for(let i = 0; i < filteredEntries.length; i++) {
        if(oneDish === "") {
            oneDish = filteredEntries[i].dish;
        }

        if(oneDish !== filteredEntries[i].dish) {
            isOneDish = false;
            break;
        }
    }

    if(oneDish === "") {
        isOneDish = false;
    }

    if(isOneDish) {
        const tempCommonErrors = {};

        for(let i = 0; i < filteredEntries.length; i++) {
            if(filteredEntries[i].dish === oneDish) {
                let screwups = filteredEntries[i].screwups;
                
                for(let j = 0; j < screwups.length; j++) {
                    let error = screwups[j];
                    
                    if(tempCommonErrors[error]) {
                        tempCommonErrors[error] += 1;
                    } else {
                        tempCommonErrors[error] = 1;
                    }
                }
            }
        }

        return tempCommonErrors;
    }
    
    else {
        return {};
    }
}

export default CommonErrors;