package tak.server.federation.hub.broker;

/*
 * This interface exports the methods which are common to
 * kinds of message payloads.
 *
 * The payload can be accessed either accessed via its binary
 * representation (byte array), or as a generic object
 * (parameterized type X).
 *
 * Important note: Concrete implementations of this interface
 * are responsible for managing the relationship between the
 * binary form and the generic form.
 *
 *
 */
public interface Payload<X> {

    /*
     * Access the payload in binary form.
     */
    byte[] getBytes();

    /*
     * Set the payload in binary form.
     */
    @SuppressWarnings("PMD.ArrayIsStoredDirectly")
    void setBytes(byte[] bytes);

    /*
     * Access the payload as a parameterized type.
     */
    X getContent();

    /*
     * Mutate the paramaterized type form of the payload.
     */
    void setContent(X content);
}
